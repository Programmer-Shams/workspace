const appwriteConfig = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
    appwiteCollectioonId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
    appwiteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID),
}
export default appwriteConfig