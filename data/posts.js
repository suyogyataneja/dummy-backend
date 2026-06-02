// const fs = require('node:fs/promises');

// async function getStoredPosts() {
//   const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
//   const data = JSON.parse(rawFileContent);
//   const storedPosts = data.posts ?? [];
//   return storedPosts;
// }

// function storePosts(posts) {
//   return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
// }

// exports.getStoredPosts = getStoredPosts;
// exports.storePosts = storePosts;

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, ScanCommand, PutCommand, DeleteCommand } =
require('@aws-sdk/lib-dynamodb');

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const TABLE_NAME = process.env.POSTS_TABLE || 'dummy-backend-posts';

async function getStoredPosts() {
  const result = await docClient.send(new ScanCommand({ TableName: TABLE_NAME }));
  return result.Items || [];
}

async function storePost(post) {
  await docClient.send(new PutCommand({
    TableName: TABLE_NAME,
    Item: post,
  }));
}

exports.getStoredPosts = getStoredPosts;
exports.storePost = storePost;