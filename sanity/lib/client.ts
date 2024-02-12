import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk3VpuqNfCuXdJaXJn92HfRXSy9G0Z9VSgL9RsoeFLavMQq6pdxptLbao50FV1dWdzEpD6n13BGPqMTLqehVNWHmhh2PogbeFTm3EAfqCfUuRMVIwClU4y0GBIbW6qrmDVIkezsPMg1kAbQHUvmTFePAsnY9MaVg547cpe42LkpiulQN79c6",
})
