import { Client, Account, ID, Databases, Query } from "appwrite";
import appwriteConfig from "./config";

// using class methods to create a new account, login, get the current user, and logout.
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(appwriteConfig.appwriteUrl)
      .setProject(appwriteConfig.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );
      {
        userAccount ? this.login({ email, password }) : null;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession({ email, password });
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      throw error;
    }
  }
}
const autthService = new AuthService();
export default autthService;

// using other methods to create a new account, login, get the current user, and logout.
const client = new Client();
client.setEndpoint(appwriteConfig.appwriteUrl);
client.setProject(appwriteConfig.appwriteProjectId);
const account = new Account(client);
export async function createAccount({ name, email, password }) {
  try {
    const newAccount = await account.create(ID.unique(), name, email, password);
    if (!newAccount) throw Error;

  } catch (error) {
    console.log(error);
  }
}
export async function loginAccount({ email, password }) {
  try {
    await account.createEmailSession({email, password});
  } catch (error) {
    console.log(error)
  }
}
export async function getCurrentUser() {
    try {
        const session = await account.get("current")
    } catch (error) {
        console.log(error)
    }
}
export async function logout() {
    try {
        await account.deleteSession()
    } catch (error) {
        console.log(error)
    }
}


// Working with databases 
const databases = new Databases(client)
export async function getPost(slug) {
  try {
    const post = await databases.getDocument(
      appwriteConfig.appwriteDatabaseId,
      appwriteConfig.appwiteCollectioonId,
      slug
    )
  } catch (error) {
    console.log(error)
  }
}

export async function getPosts() {
  try {
    return await databases.listDocuments(
      appwriteConfig.appwriteDatabaseId,
      appwriteConfig.appwiteCollectioonId,
      [Query.equal("status", "active")]
    )
  } catch (error) {
    console.log(error)
  }
}
export async function creatPost(slug, {title, featuredImage, content, status, userId}) {
  try {
    return await databases.createDocument(
      appwriteConfig.appwriteDatabaseId,
      appwriteConfig.appwiteCollectioonId,
      slug,
      {title, content, featuredImage, status, userId}
    )
  } catch (error) {
    console.log(error)
  }
}
export async function UpdatePost(slug, {title, featuredImage, content, status,}) {
  try {
    await databases.updateDocument(
      appwriteConfig.appwriteDatabaseId,
      appwriteConfig.appwiteCollectioonId,
      slug,
      {title, featuredImage, content, status}
    )
  } catch (error) {
    console.log(error)
  }
}
export async function deletePost(slug) {
  try {
    await databases.deleteDocument(
      appwriteConfig.appwriteDatabaseId,
      appwriteConfig.appwiteCollectioonId,
      slug,
    )
  } catch (error) {
    console.log(error)
  }
}