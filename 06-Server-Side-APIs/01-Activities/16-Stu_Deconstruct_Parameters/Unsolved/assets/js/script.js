fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.

//per_page = number of results per page
//state = makes sure response belngs to a request initiated by the same user (CSFR attacks)
//sort = property to sort the results by (created, updated, pished, full_name)
//direction = the order to sort by