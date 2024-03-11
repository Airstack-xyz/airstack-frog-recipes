import { fetchQuery } from "@airstack/frames";

export interface AllowListCriteria {
  eventIds?: number[];
  isFollowingOnFarcaster?: number[];
  numberOfFollowersOnFarcaster?: number;
}

export type CreateAllowListQueryVariables = Exact<{
  identity: Scalars['Identity']['input'];
  eventIds: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  isFollowingOnFarcaster: InputMaybe<Array<Scalars['Identity']['input']> | Scalars['Identity']['input']>;
  fid: Scalars['String']['input'];
  followerCountOnFarcaster: Scalars['Int']['input'];
}>;


export type CreateAllowListQuery = { poaps: { Poap: Array<{ eventId: string | null }> | null } | null, isFollowingOnFarcaster: { socialFollowers: { Follower: Array<{ followingAddress: { farcaster: Array<{ fid: string | null }> | null } | null }> | null } | null } | null, numberOfFollowersOnFarcaster: { Social: Array<{ followerCount: number | null }> | null } | null };


const query = /* GraphQL */ `
  query CreateAllowList(
    $identity: Identity!
    $eventIds: [String!]
    $isFollowingOnFarcaster: [Identity!]
    $fid: String!
    $followerCountOnFarcaster: Int!
  ) {
    poaps: Poaps(
      input: {
        filter: { owner: { _eq: $identity }, eventId: { _in: $eventIds } }
        blockchain: ALL
        limit: 200
      }
    ) {
      Poap {
        eventId
      }
    }
    isFollowingOnFarcaster: Wallet(
      input: { identity: $identity, blockchain: ethereum }
    ) {
      socialFollowers(
        input: {
          filter: {
            identity: { _in: $isFollowingOnFarcaster }
            dappName: { _eq: farcaster }
          }
          limit: 200
        }
      ) {
        Follower {
          followingAddress {
            farcaster: socials(
              input: { filter: { dappName: { _eq: farcaster } } }
            ) {
              fid: userId
            }
          }
        }
      }
    }
    numberOfFollowersOnFarcaster: Socials(
      input: {
        filter: {
          userId: { _eq: $fid }
          dappName: { _eq: farcaster }
          followerCount: { _gte: $followerCountOnFarcaster }
        }
        blockchain: ethereum
      }
    ) {
      Social {
        followerCount
      }
    }
  }
`;


export async function createAllowList(
  fid: number | undefined,
  allowListCriteria: AllowListCriteria
): Promise<boolean> {
  const { eventIds, numberOfFollowersOnFarcaster, isFollowingOnFarcaster } =
    allowListCriteria;
  const variables: CreateAllowListQueryVariables = {
    fid: fid?.toString() ?? "1",
    identity: `fc_fid:${fid}`,
    eventIds: eventIds?.map((id) => id.toString()) ?? [],
    isFollowingOnFarcaster: isFollowingOnFarcaster?.map((id) => `fc_fid:${id}`),
    followerCountOnFarcaster: numberOfFollowersOnFarcaster ?? 30,
  };
  const { data, error }: { data: CreateAllowListQuery; error: any } =
    await fetchQuery(query, variables);

  if (!error) {
    const {
      poaps,
      isFollowingOnFarcaster: Follower,
      numberOfFollowersOnFarcaster,
    } = data ?? {};
    return (
      true &&
      (eventIds
        ?.map((id) => ({
          eventId: id,
          isAttended: (poaps?.Poap ?? [])?.some(
            (p: any) => p?.eventId === id?.toString()
          ),
        }))
        ?.every(({ isAttended }) => isAttended) ??
        true) &&
      (isFollowingOnFarcaster
        ?.map((fid) => ({
          fid,
          isFollowing: (Follower?.socialFollowers?.Follower ?? [])?.some(
            (f: any) =>
              f?.followingAddress?.farcaster?.some(
                (fc: { fid: string | null }) => fc?.fid === fid.toString()
              )
          ),
        }))
        ?.every(({ isFollowing }) => isFollowing) ??
        true) &&
      (numberOfFollowersOnFarcaster?.Social ?? []).length > 0
    );
  } else {
    console.log(error);
    throw new Error(error);
  }
}
