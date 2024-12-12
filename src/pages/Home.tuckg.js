import wixData from 'wix-data';

$w.onReady(function () {
    // Query the "Courses" collection to get the number of courses
    wixData.query("Programs")
        .count() // This will count the number of items (courses)
        .then((results) => {
            // Display the count in the text box
            // @ts-ignore
            $w("#programcount").text = `We offer ${results} programs`;
        })
        .catch((error) => {
            console.log("Error counting courses: ", error);
        });
});
