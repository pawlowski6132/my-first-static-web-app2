

axios.get
    (
    "https://jolly-tree-09d677910.4.azurestaticapps.net/data-api/rest/guitar_brands"
    ).then
        (
            (
                res
            ) =>
             {console.log
                (
                    "RESPONSE: ", res
                );
                }
        );