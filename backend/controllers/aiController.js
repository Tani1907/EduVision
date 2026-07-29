const debugSQL = async (req, res) => {

    const { query, error } = req.body;

    let suggestion = "";
    let explanation = "";

    if (query.toUpperCase().includes("SELEC")) {
        suggestion = query.replace(/SELEC/gi, "SELECT");
        explanation = "Keyword SELECT is misspelled.";
    }

    else if (query.toUpperCase().includes("FORM")) {
        suggestion = query.replace(/FORM/gi, "FROM");
        explanation = "Keyword FROM is misspelled.";
    }

    else {

        suggestion = query;
        explanation = "Check SQL syntax.";

    }

    res.json({

        originalQuery: query,

        databaseError: error,

        suggestion,

        explanation

    });

};

module.exports = {
    debugSQL
};