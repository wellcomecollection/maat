import { FunctionComponent, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import Link from 'next/link'
import QueryForm from '../components/QueryForm'
import absoluteUrl from 'next-absolute-url'

type Props = {
  data?: any
  search: {
    query?: string
    queryId?: string
    endpoint?: string
  }
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query: qs,
  req,
}) => {
  const query = qs.query ? qs.query.toString() : undefined
  const queryId = qs.queryId ? qs.queryId.toString() : 'match-all'
  const endpoint = qs.endpoint ? qs.endpoint.toString() : 'works'
  const { origin } = absoluteUrl(req)
  const reqQs = Object.entries({ query, queryId, endpoint })
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&')

  const resp = await fetch(`${origin}/api/search?${reqQs}`)
  const data = await resp.json()

  return {
    props: {
      data,
      search: JSON.parse(
        JSON.stringify({
          query,
          queryId,
          endpoint,
        })
      ),
    },
  }
}

type RankEvalStatusProps = {
  score: number
}
const RankEvalStatus: FunctionComponent<RankEvalStatusProps> = ({ score }) => {
  return (
    <div
      className={`w-5 h-5 mr-2 rounded-full bg-${
        score === 1 ? 'green' : 'red'
      }-200`}
    >
      <span className="sr-only">{score === 1 ? 'pass' : 'fail'}</span>
    </div>
  )
}

type HitProps = { hit: any; endpoint }
const Hit: FunctionComponent<HitProps> = ({ hit, endpoint }) => {
  const [showExplanation, setShowExplanation] = useState(false)
  const title =
    endpoint === 'images'
      ? hit._source.source.canonicalWork.data.title
      : hit._source.data.title
  return (
    <>
      <h2 className="mt-5 text-xl border-t-4">{title}</h2>
      <div onClick={() => setShowExplanation(!showExplanation)}>
        Score: {hit._score}
      </div>
      {showExplanation && (
        <pre>{JSON.stringify(hit._explanation, null, 2)}</pre>
      )}
      {hit.highlight && (
        <>
          <h3 className="text-lg font-bold mt-2">Matches</h3>
          {hit.matched_queries && (
            <div>Queries: {hit.matched_queries.join(', ')}</div>
          )}
          <div>
            {Object.entries(hit.highlight).map(([key, highlight]) => {
              return (
                <div key={key}>
                  <h3 className="font-bold">{key}</h3>
                  {(highlight as any[]).map((text) => (
                    <div
                      key={key}
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

const RankEval = ({ rankEval, search }) => {
  const [showRankEval, setShowRankEval] = useState(true)

  return (
    <div className="mt-5">
      <button
        type="button"
        className={`flex flex-auto items-center mr-2 mb-2 p-2 bg-indigo-${
          showRankEval ? '100' : '200'
        } rounded-full`}
        onClick={() => setShowRankEval(!showRankEval)}
      >
        <RankEvalStatus
          score={
            Object.values(rankEval.details).every(
              (ranking) => ((ranking as any).metric_score as any) === 1
            )
              ? 1
              : 0
          }
        />
        {rankEval.queryId}
      </button>
      {showRankEval && (
        <div className="flex flex-wrap">
          {Object.entries(rankEval.details).map(([title, ranking], i) => (
            <Link
              href={{
                pathname: '/search',
                query: JSON.parse(
                  JSON.stringify({
                    query: title,
                    queryId: search.queryId,
                    endpoint: search.endpoint,
                  })
                ),
              }}
              key={i}
            >
              <a className="flex flex-auto items-center mr-2 mb-2 p-2 bg-indigo-200 rounded-full">
                <RankEvalStatus score={(ranking as any).metric_score} />
                <div>{title}</div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const Search: NextPage<Props> = ({ data, search }) => {
  return (
    <>
      <QueryForm
        query={search.query}
        queryId={search.queryId}
        endpoint={search.endpoint}
      />

      <h1 className="text-4xl font-bold">Tests</h1>
      {data.rankEval.map((rankEval, i) => (
        <RankEval key={i} rankEval={rankEval} search={search} />
      ))}
      <h1 className="text-4xl font-bold">Hits</h1>
      <ul>
        {data.hits.hits.map((hit) => (
          <li key={hit._id}>
            <Hit hit={hit} endpoint={search.endpoint} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Search
