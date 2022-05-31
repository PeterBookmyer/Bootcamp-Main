function getDogsNow() {

$.ajax({
  type: "GET", 
  url: 'https://test1-api.rescuegroups.org/v5/public/petlists/',
  headers: {Authorization: 'LFSvPQMT'},
 
})
  
  .then(function (data) {
    console.log(data);
  });

}
getDogsNow()
