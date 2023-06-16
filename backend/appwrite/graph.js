/* const appwrite = require("node-appwrite");

const client = new appwrite.Client()
.setEndpoint('http://192.168.1.123:1234/v1') // Your Appwrite Endpoint
.setProject('648c6ca2329c6f575314') // Your project ID 
.setKey('dcfb228d63475d31444074042260832e9cbe04d36a0e85d53fe13287509abcc77c943e5a83689832c978a72613b91d3ef66c38661981dc01494b49626f429c5cd7b0de373d7ab822be921bb27a8e0aa89ff44056f70837735eb3cf587f6d0eda1c9456dd011ac913eca760b22361d169ad56f2a1280cde5f947f9c421ecd1f55');

const documentId = uuidv4(); // Generate a UUID

new appwrite.Graphql(client)
.mutation({
    query: `mutation {
        databasesCreateDocument(
            databaseId: "648c6cd2577988d9fb09",
            collectionId: "648c6cda0a95e984f6ad",
            documentId: "${documentId}",
            data: {
                    type: "as",
                    title: "as"
                }
                ) {
                    _id
                _collectionId
                _databaseId
                _createdAt
                _updatedAt
                _permissions
                data
            }
        }`
    })
    .then(response => {
        console.log(response);
        console.log(JSON.stringify(response));
    })
    .catch(error => {
        console.log(error.message);
    });
 */


const appwrite = require("node-appwrite");
const { v1: uuidv4 } = require('uuid');

const client = new appwrite.Client()
    .setEndpoint('http://192.168.1.123:1234/v1') // Your Appwrite Endpoint
    .setProject('648c6ca2329c6f575314') // Your project ID 
    .setKey('dcfb228d63475d31444074042260832e9cbe04d36a0e85d53fe13287509abcc77c943e5a83689832c978a72613b91d3ef66c38661981dc01494b49626f429c5cd7b0de373d7ab822be921bb27a8e0aa89ff44056f70837735eb3cf587f6d0eda1c9456dd011ac913eca760b22361d169ad56f2a1280cde5f947f9c421ecd1f55');



/* 
Series Query
  data: {
    title: "${data.title}",
    tournament_type: "${data.tournament_type}",
}


Matches Query
data: {
    start_date: "${data.start_date}",
    seriesId: "${data.seriesId}",
    name: "${data.name}",
}
*/
async function createDocument(databaseId, collectionId, data) {
    const documentId = uuidv4(); // Generate a UUID

    try {
        const response = await new appwrite.Graphql(client).mutation({
            query: `mutation {
                databasesCreateDocument(
                    databaseId: "${databaseId}",
                    collectionId: "${collectionId}",
                    documentId: "${documentId}",
                    data: {
                        start_date: "${data.start_date}",
                        seriesId: "${data.seriesId}",
                        name: "${data.name}",
                        matchId: "${data.matchId}",
                    }
                ) {
                    _id
                    _collectionId
                    _databaseId
                    _createdAt
                    _updatedAt
                    _permissions
                    data
                }
            }`
        });

        console.log("Document created successfully:", response);
        return response;
    } catch (error) {
        console.log("Error creating document:", error.message);
        throw error;
    }
}


async function getDocuments(databaseId, collectionId) {
    try {
        const response = await new appwrite.Graphql(client).query({
            query: `query {
                databasesListDocuments(
                    databaseId: "${databaseId}",
                    collectionId: "${collectionId}"
                ) {
                    documents {
                        _id
                        _collectionId
                        _databaseId
                        _createdAt
                        _updatedAt
                        _permissions
                        data
                    }
                }
            }`
        });

        // console.log("Documents retrieved successfully:", response);
        return response;
    } catch (error) {
        console.log("Error retrieving documents:", error.message);
        throw error;
    }
}

async function deleteDocument(databaseId, collectionId, documentId) {
    try {
        const response = await new appwrite.Graphql(client).mutation({
            query: `mutation {
                databasesDeleteDocument(
                    databaseId: "${databaseId}",
                    collectionId: "${collectionId}",
                    documentId: "${documentId}"
                ) {
                    status
                }
            }`
        });

        console.log(`Document "${documentId}" deleted successfully`);
        return response;
    } catch (error) {
        console.log(`Error deleting document "${documentId}":`, error.message);
        throw error;
    }
}

async function deleteDocuments(databaseId, collectionId, documentIds) {
    try {
        for (const documentId of documentIds) {
            await deleteDocument(databaseId, collectionId, documentId);
        }

        console.log("All documents deleted successfully");
    } catch (error) {
        console.log("Error deleting documents:", error.message);
        throw error;
    }
}

// Example usage
async function getDocument(databaseId, collectionId, documentId) {
    try {
        const response = await new appwrite.Graphql(client).query({
            query: `query {
                databasesGetDocument(
                    databaseId: "${databaseId}",
                    collectionId: "${collectionId}",
                    documentId: "${documentId}"
                ) {
                    _id
                    _collectionId
                    _databaseId
                    _createdAt
                    _updatedAt
                    _permissions
                    data
                }
            }`
        });
        
        console.log("Document retrieved successfully:", response);
        return response;
    } catch (error) {
        console.log("Error retrieving document:", error.message);
        throw error;
    }
}


module.exports = createDocument;




const databaseId = "648c6cd2577988d9fb09";
const collectionId = "648c6ce86632be598253";
getDocuments(databaseId, collectionId)
    .then(documents => {
        // Do something with the retrieved documents
        console.log("Retrieved documents:", documents);
        console.log(documents);

        const documentIds = documents.data.databasesListDocuments.documents.map(document => getDocument(databaseId, collectionId, document._id));
        // return deleteDocuments(databaseId, collectionId, documentIds);
        
        console.log(documentIds);

    })
    .catch(error => {
        console.log("Error:", error);
    }); 
