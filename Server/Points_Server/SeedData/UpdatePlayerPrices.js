const calculatePlayerPrice = require("../../PlayerPrice/PlayerPriceFormula");
const startFetchGetAvgPoints = require("./GetAvgPoints");
const startExecuteInsertPlayers = require("./SeedPlayerPrice");

async function seedData() {
    //How to get the player ids
    var data = {
        "Players_Players": [
            {
                "id": "0bfa10ce-453f-4728-86da-c60ccad9c6a8"
            },
            {
                "id": "27cf5232-2bf6-41c7-ae17-bb92287e04f9"
            },
            {
                "id": "d1d2a4a4-1290-489d-9b0a-b80c828e07ea"
            },
            {
                "id": "50e3154a-1eb2-44f6-aaf0-53cbe093ea64"
            },
            {
                "id": "2649eff2-a526-4e73-a2a4-d54d50f01559"
            },
            {
                "id": "5a9a2781-11e1-4f6b-95d5-82600a01a260"
            },
            {
                "id": "1194804e-db0d-4f0e-ae8c-072612ac660c"
            },
            {
                "id": "f4760979-6484-4be0-8b6f-c06c8b5ac6f9"
            },
            {
                "id": "8b4858d1-d5fa-4a46-917f-566960b07d86"
            },
            {
                "id": "03bf7a4b-c051-4b50-9bc9-791a3a630933"
            },
            {
                "id": "403ddadd-35bf-41de-b464-8fbedb505c8c"
            },
            {
                "id": "ada15f26-6c91-4f65-a0bb-761f1dd7937a"
            },
            {
                "id": "9162a351-71f3-456d-8b61-ed1c73892c7d"
            },
            {
                "id": "22cccb5a-9417-4c05-921b-dd5fde668e6c"
            },
            {
                "id": "1326f79d-9d22-4490-b18e-32cadfd3e728"
            },
            {
                "id": "7503b8c0-382e-457a-9e5f-e62925f67736"
            },
            {
                "id": "9582826e-5672-4451-b112-a46cd59dc037"
            },
            {
                "id": "b00bbd83-708f-4abe-bdbf-4b3947ed3752"
            },
            {
                "id": "a8958473-2d25-4f0b-a452-087b11cfb222"
            },
            {
                "id": "5f97afd5-0426-47f8-8688-045318d7d175"
            },
            {
                "id": "c2bef6f6-d3ae-4c7d-a668-1de533b9a5a3"
            },
            {
                "id": "25ffc44d-f829-4f93-aa18-d3526fd29bef"
            },
            {
                "id": "6f7f3532-722c-4085-9613-056f4931608d"
            },
            {
                "id": "4e809d67-a2d5-4a77-a015-a26924504de7"
            },
            {
                "id": "5139dc30-7e6f-4789-ac4e-7eb83b028463"
            },
            {
                "id": "28b23643-05b8-449e-a5ee-0ef7e3aa20aa"
            },
            {
                "id": "eb4b2790-c5cc-43c9-875e-3c908e2cee11"
            },
            {
                "id": "91ad5788-d0ac-4718-b10f-0f4d72ba3724"
            },
            {
                "id": "0fdfee18-48a4-46f7-905a-612f49a0c0a9"
            },
            {
                "id": "b6c12e88-6a0e-4501-901c-e104dbd32df6"
            },
            {
                "id": "77f88f8e-331d-4211-bdef-95f8c8aaaaf9"
            },
            {
                "id": "3803ac7e-41a9-40b3-8e18-c647f34b683a"
            },
            {
                "id": "97cc8bca-9325-4cb5-acaf-69172a9b348d"
            },
            {
                "id": "93604548-af79-49ae-a220-a65e44a2df0f"
            },
            {
                "id": "ccb85e07-31b5-4e83-b980-88bf64d62455"
            },
            {
                "id": "45b16a16-45c3-4378-b471-b3939f3a3fa2"
            },
            {
                "id": "46e01fca-b5eb-4f66-b763-92bd33ef39d5"
            },
            {
                "id": "f548d8a9-96d9-4d27-91ad-17fac00754c0"
            },
            {
                "id": "d8a81a15-7f10-47ef-a343-9bc819b5c8ba"
            },
            {
                "id": "c20028e0-5925-4780-ab33-1f307ad759e9"
            },
            {
                "id": "2dcc1dba-ea1e-485e-aa7e-e4e6765723f0"
            },
            {
                "id": "1350d96e-30a0-4a43-a5fb-668e6e00f7d6"
            },
            {
                "id": "4dfcb012-af94-415e-affe-bab03ff8ccf1"
            },
            {
                "id": "032a6b94-4978-4866-b914-fed2fd519bd7"
            },
            {
                "id": "9dfa1a73-bb72-4814-bcf8-dd7b60493590"
            },
            {
                "id": "c94a8db6-fb23-436e-b62e-67810c00b2c8"
            },
            {
                "id": "c588dd54-c44b-4643-a631-4e82c1a8894c"
            },
            {
                "id": "9baa919c-ea91-4c52-8b0c-11a744775583"
            },
            {
                "id": "c2619008-e803-44db-a6b3-8f8dbef5725d"
            },
            {
                "id": "6f2063da-04e8-40c0-8663-73723d143d81"
            },
            {
                "id": "458d8ca6-4e1b-4009-8e60-27c2e4ce95de"
            },
            {
                "id": "72197d0b-847f-4e52-8401-a10d0fa00c20"
            },
            {
                "id": "ef99698f-63a9-4575-912d-1dd5af2e0b60"
            },
            {
                "id": "e316677f-a165-45aa-8abc-d0acc893772e"
            },
            {
                "id": "6abbf6ff-09ff-4857-a90d-c7256a1093ee"
            },
            {
                "id": "5d41cf75-d09d-48e4-83ac-ba5463e6cad1"
            },
            {
                "id": "52bfb633-0cf6-432e-944d-6c0023b8956e"
            },
            {
                "id": "4a3cb36d-e69a-45a8-bc1b-cb89a69e927a"
            },
            {
                "id": "f2c29d93-05ea-495d-bce7-3c6e0a7c13cb"
            },
            {
                "id": "c542bdeb-2d89-4b4c-a9a2-c3360a77b1e2"
            },
            {
                "id": "a404b5c0-559d-4a76-ae23-312070b94f4c"
            },
            {
                "id": "940de7cb-e584-4380-a7f7-146ea74e48a4"
            },
            {
                "id": "3ad1e2da-825a-476d-acb3-e45526706e58"
            },
            {
                "id": "aa58e166-0c3c-49f4-97c8-73d14667d946"
            },
            {
                "id": "16577628-addf-4068-8d03-290d5519de9f"
            },
            {
                "id": "15b78382-1308-46af-9d5c-3585f8f5a0ab"
            },
            {
                "id": "e79fe8e5-a928-4e55-9dc9-238f7f50db95"
            },
            {
                "id": "3349832c-4f16-479c-987f-ce74ffeb1dda"
            },
            {
                "id": "28bc8f50-4b58-4dc8-9018-d34c966bb508"
            },
            {
                "id": "8eef8790-8585-4102-bbe6-965aaa591a35"
            },
            {
                "id": "13975cc8-f070-4d08-b506-77cca36a1730"
            },
            {
                "id": "5a5a46ca-5956-438d-a8a6-325251b6e776"
            },
            {
                "id": "59b1d38a-2506-4295-878b-a82037296e1f"
            },
            {
                "id": "790e3387-eeae-40ff-8cfd-00e5fd116b85"
            },
            {
                "id": "e5c6e995-cd2e-4348-86c0-45ba4df84546"
            },
            {
                "id": "bfd79bc6-399e-4bb6-8da8-427fdffcabbb"
            },
            {
                "id": "d87c3dce-170d-48d6-96b9-b6cfcb723e84"
            },
            {
                "id": "27b0bac4-cdb2-42be-8509-ff2233c7ee14"
            },
            {
                "id": "3d9a14c3-7a39-4345-9162-cde17f602dd0"
            },
            {
                "id": "2be04e21-67a2-4673-82f3-6283674324eb"
            },
            {
                "id": "c9be630d-7b3b-44df-9d7c-1c61ecb2a841"
            },
            {
                "id": "733abea5-49d8-42a7-8861-ced93ec07077"
            },
            {
                "id": "223e9500-b94f-4831-a4d8-4ff247475172"
            },
            {
                "id": "4a903e5c-bb7f-4506-a9dc-99bedef4ca09"
            },
            {
                "id": "8deb12b9-024a-440f-946d-4a1739e3a813"
            },
            {
                "id": "ae9263b5-ebfe-407f-a5cb-36a2a3a1ea6a"
            },
            {
                "id": "60c81544-7b01-44f0-a7c7-cded8c084a9e"
            },
            {
                "id": "e4264f37-d6d9-4acd-acdc-9947d24d37cd"
            },
            {
                "id": "afb54125-fd5f-4742-b414-291085eb8955"
            },
            {
                "id": "b319d32e-5ebc-499c-aaa0-13773fa04b01"
            },
            {
                "id": "d62b4d25-7649-453a-b00f-5a52ea056f56"
            },
            {
                "id": "63700d7b-fa9e-48eb-ace4-e2bf762badf7"
            },
            {
                "id": "3d203c71-0170-4931-8bd4-96d454960936"
            },
            {
                "id": "6beb553a-0268-4a2f-8d72-72215482389d"
            },
            {
                "id": "4135b7ea-d5d6-4dcd-a8d6-01f17d77b866"
            },
            {
                "id": "f9f6d59e-9564-4e32-84bd-77d4342d08fe"
            },
            {
                "id": "fecf218f-5749-41e0-a0a5-12b384b66270"
            },
            {
                "id": "9f5bafdb-b7f4-4bd3-8dec-15d0fb09e45d"
            },
            {
                "id": "eb255c9d-b363-4df1-825f-0ff40464665f"
            },
            {
                "id": "f6024903-60f4-4f6d-9912-411599cc42f3"
            },
            {
                "id": "be3ff35a-d685-40c2-9b39-a944f8f3bccc"
            },
            {
                "id": "94f7bf42-a08a-44f3-8b86-fb23c6a65bbb"
            },
            {
                "id": "76049fc3-5fb1-45c4-a441-89846468e893"
            },
            {
                "id": "b817c50d-b2c1-46e2-ac9f-df428f55f37d"
            },
            {
                "id": "cebef6b0-bd40-4051-ac95-0e82311cc0f6"
            },
            {
                "id": "4de389a7-bb3f-4029-abc7-254991cdf4cf"
            },
            {
                "id": "d3c9a96f-e4fb-4ac8-b0c2-ce46176d2dde"
            },
            {
                "id": "25666d79-d17b-4bb9-a75e-d435a4b67f0c"
            },
            {
                "id": "db23b822-41b5-4728-8057-d25f121410be"
            },
            {
                "id": "71d4a0d3-5083-4a25-8122-2faf5124aea3"
            },
            {
                "id": "af3a715a-9c7d-48f9-816a-51685a2d7e54"
            },
            {
                "id": "98908eaf-69a9-4bd6-ae1a-ca53feefd235"
            },
            {
                "id": "e340cc03-38cb-4034-b2be-4c3217266e91"
            },
            {
                "id": "79778e98-18d3-4fda-aa1d-4cf4f768b399"
            },
            {
                "id": "97b0d5da-0978-4ada-9e12-fa74330c4130"
            },
            {
                "id": "f88e607d-4082-426c-b6d2-5c2a694dc527"
            },
            {
                "id": "47a01fd2-5a4d-4bed-88f1-3432227666bf"
            },
            {
                "id": "4145d800-d084-483a-8779-bbfbf1a70783"
            },
            {
                "id": "d46a5f23-3c9d-4c44-8834-601f9a0ad3ad"
            },
            {
                "id": "1ab62212-4241-4745-a10b-e8bc4236ce70"
            },
            {
                "id": "c88f063f-54a0-4bc0-aff4-c68d8e4e7c3c"
            },
            {
                "id": "a4c4f448-7f8a-4613-ad7c-ca583daafa77"
            },
            {
                "id": "79efbcec-7671-46b0-b82e-0c9b40f5b092"
            },
            {
                "id": "c8aa6cc6-beef-4795-a085-9d1421d04463"
            },
            {
                "id": "b30f2ab0-2c92-44db-a8f9-1467305dd206"
            },
            {
                "id": "a318e5e8-e14c-4439-83f3-1deb419e2b8f"
            },
            {
                "id": "6e9f9671-542d-4d54-beae-e1bfad063655"
            },
            {
                "id": "9c320780-d220-41ff-8614-569fd8529c06"
            },
            {
                "id": "a1a380c5-d513-4abf-8592-90e61238569a"
            },
            {
                "id": "b48337c2-cbab-4ab4-bf75-d4f5d6d2c8fb"
            },
            {
                "id": "10c8e3d4-b79e-4f05-bd79-bb977e4c094a"
            },
            {
                "id": "249fecc2-f729-4762-8298-3e4733a89639"
            },
            {
                "id": "739bfeba-d439-4893-be7c-41e8f747e24e"
            },
            {
                "id": "d47cb504-a161-408a-aab7-77dc4ea5c9ef"
            },
            {
                "id": "78a08ede-bf1d-4769-bb3c-eef216e98a42"
            },
            {
                "id": "fdd884d1-b357-434d-8524-2ea97d37c57c"
            },
            {
                "id": "b5f35001-ad79-414e-875d-2c6ef3ec63bb"
            },
            {
                "id": "b17198b3-3c8e-4afa-b71e-42b80140aed2"
            },
            {
                "id": "8cc81a41-6680-4be0-accc-3b0e26d80c0f"
            },
            {
                "id": "fba98654-01b7-4b9f-bc57-1b298770062a"
            },
            {
                "id": "7d1bbf07-8fcb-455a-8446-c60786aa3381"
            },
            {
                "id": "05bee63a-9b4f-43f4-a1e6-77341f5f1f7d"
            },
            {
                "id": "740f4de7-d585-418a-93d0-03feea785344"
            },
            {
                "id": "1872097a-b8c2-4721-98a1-6261525375a5"
            },
            {
                "id": "b2aae0a3-3910-4c23-b009-57978998901d"
            },
            {
                "id": "20eed112-a2ab-46f6-b8d9-5050c66d7681"
            },
            {
                "id": "ce2e0e48-e29e-46bc-81ec-7b22ca5c90fd"
            },
            {
                "id": "561884db-a364-4224-90c1-c17f48ccdcd5"
            },
            {
                "id": "a920e7a9-0075-4937-9949-d26dca414555"
            },
            {
                "id": "5190424f-3cb7-4db5-a9b0-a130483b00cc"
            },
            {
                "id": "3ba16054-4cf1-4673-8bd1-b7426772f378"
            },
            {
                "id": "4725a46b-8a81-4c11-9509-e9301497b329"
            },
            {
                "id": "7315e326-cae2-43f4-85d0-e423c11ce9a7"
            },
            {
                "id": "d4db137f-c0f7-4d30-9541-bbbe67065408"
            },
            {
                "id": "deb40699-fefd-45d9-8418-1548ef2b8376"
            },
            {
                "id": "d152b9cd-b68e-4a3e-83ee-cf00890a272b"
            },
            {
                "id": "42593351-e9a4-4738-9045-eb1a968eb5a6"
            },
            {
                "id": "d1f5bbab-1f94-415c-98bb-7f4397484099"
            },
            {
                "id": "b96b3fd0-32db-4c0c-94bd-517bcd39d620"
            },
            {
                "id": "123ebef0-a3ed-4c01-84f1-fa3aa33b4ae4"
            },
            {
                "id": "45a27a2d-93f4-4038-8419-af8df70dd4ab"
            },
            {
                "id": "c30b0d23-81a4-4868-ad44-4a20f0e2a657"
            },
            {
                "id": "eab23ad2-3f61-457c-9971-b5f4bda77711"
            },
            {
                "id": "8a37b62f-59da-4109-9f18-8f9d7c347365"
            },
            {
                "id": "70086f17-5fe8-4ec9-ab55-7c2941007741"
            },
            {
                "id": "23e0ef23-5fa4-4be5-bf68-2feca129c6fe"
            },
            {
                "id": "4b6d284a-9e39-439c-9d8d-1cf70932a1fb"
            },
            {
                "id": "491a74c0-3212-463e-944d-8c5c0253fb4f"
            },
            {
                "id": "02382aca-1c0a-4a81-9023-47bf323b469b"
            },
            {
                "id": "3502974f-e6b2-4d37-8198-ee2cbff7985d"
            },
            {
                "id": "4d9d88a6-1b16-4a08-8546-a3d8790b96b2"
            },
            {
                "id": "cae762c6-ea56-434d-9663-9bb7a9c59e66"
            },
            {
                "id": "486d0e83-1ac1-4787-8838-16f5e9222776"
            },
            {
                "id": "1d714e2e-49ba-4e1f-830f-cb6ce82294f2"
            },
            {
                "id": "8d2d8c9a-df7e-4dbe-aeb5-35f142df60c5"
            },
            {
                "id": "3adcc693-fd40-498b-87b9-e77b947f4600"
            },
            {
                "id": "0582ee9d-db54-4a9e-bf5f-7bdb4b5435aa"
            },
            {
                "id": "4577fff4-e14e-4fd3-bfb1-cd70374cd6d1"
            },
            {
                "id": "119823a0-30bf-4a9e-bc00-2450e3ec7392"
            },
            {
                "id": "821420cc-2e84-47f8-aa68-0ebea093033f"
            },
            {
                "id": "734cc40d-eabf-4d48-bbe2-57d7a9b57e29"
            },
            {
                "id": "654c3fe5-908c-44b4-9486-6b3bf452aee5"
            },
            {
                "id": "b2af8268-8c2c-496a-a141-39dca80a6c7a"
            },
            {
                "id": "220b0947-9e99-49c3-8ceb-0fa10443c3ee"
            },
            {
                "id": "483f0022-cf45-4474-a5a8-0eab6476ecc6"
            },
            {
                "id": "ed737262-490f-4e47-bf54-c5cd8b8ab565"
            },
            {
                "id": "ec682a98-f068-4396-9b9b-5260047f5eac"
            },
            {
                "id": "38b8ad4b-f395-473e-b9a6-8320efb040f3"
            },
            {
                "id": "c02a8abd-8f9f-4c8f-a95b-01053be8df24"
            },
            {
                "id": "daa6b492-1b02-4a5a-96b5-c5ea04a6e2f7"
            },
            {
                "id": "1d55f0ed-6d40-4c67-a019-a3c09bb91d35"
            },
            {
                "id": "468e3b9e-e445-45ec-ba96-b9dd980dbe7f"
            },
            {
                "id": "7532b734-6122-4127-8027-86fe6a1ef066"
            },
            {
                "id": "ec3ed369-f845-41ad-87fe-c95b269c3501"
            },
            {
                "id": "092396fd-773c-425f-b7df-bf6f29849b57"
            },
            {
                "id": "9a784cb8-bb1e-4be7-b7d1-4e6661384c54"
            },
            {
                "id": "829ef767-3c19-4e46-bcb6-94ced48358c2"
            },
            {
                "id": "65d07548-ee37-495b-82ac-682a998d66a4"
            },
            {
                "id": "74d3bf8e-f12f-4764-b108-2043dc280ad9"
            },
            {
                "id": "1f9cfc0f-4243-442f-a4b7-bc5977e2534b"
            },
            {
                "id": "06731764-4964-4650-af87-96079962c43c"
            },
            {
                "id": "ae49fd0d-03e3-46a6-b7ed-7e006b8ee345"
            },
            {
                "id": "d240be4d-4be8-40db-80de-5eb5e97480ec"
            },
            {
                "id": "0b1f9a42-8051-4f93-bffa-76ecd109b0c5"
            },
            {
                "id": "4653acbf-20a0-47a2-9c2f-13fedc75c1dd"
            },
            {
                "id": "a47ec240-0d89-4c64-88b0-b85d32815a04"
            },
            {
                "id": "44b39552-c025-414a-bfbe-33e7066af1a4"
            },
            {
                "id": "91a20de2-59b3-4649-b7ef-138c5d78f3a1"
            },
            {
                "id": "c080d99c-3124-474c-b651-b127ace9bd9f"
            },
            {
                "id": "a0a7f1cc-5544-4042-814c-579a650f3564"
            }
        ]
    };

    data["Players_Players"].forEach(async (player) => {
        
        var data = await startFetchGetAvgPoints(player.id)
        var bowling_points = data["Players_Bowling_stats_aggregate"]["aggregate"]["avg"]["bowling_points"]
        var batting_points = data["Players_Batting_stats_aggregate"]["aggregate"]["avg"]["batting_points"]
        var fielding_points = data["Players_Filding_stats_aggregate"]["aggregate"]["avg"]["fielding_point"]
        
        var avg_points = (bowling_points+batting_points+fielding_points)
        
        var price = calculatePlayerPrice(100, avg_points)
        price = price.toFixed(2)
        avg_points = avg_points.toFixed(2)

        await startExecuteInsertPlayers(price.toString(), avg_points.toString(), player.id);

    })
}

seedData()