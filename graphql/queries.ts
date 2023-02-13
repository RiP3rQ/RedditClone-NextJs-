import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query MyQuery {
    postList {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListById(post_id: $post_id) {
      body
      created_at
      id
      image
      title
      subreddit_id
      username
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotedByPostId(post_id: $post_id) {
      created_at
      id
      post_id
      upvote
      username
    }
  }
`;

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditListLimit(limit: $limit) {
      created_at
      id
      topic
    }
  }
`;
