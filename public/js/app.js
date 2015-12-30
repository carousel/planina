    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
        var matches, substringRegex;

    //an array that will be populated with substring matches
        matches = [];

    //regex used to determine if a string contains the substring `q`
        substrRegex = new RegExp(q, 'i');

    //iterate through the pool of strings and for any string that
    //contains the substring `q`, add it to the `matches` array
        $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
            matches.push(str);
        }
        });

        cb(matches);
    };
};


    //var mountains = ['Maglic','Volujak','Cvrsnica','Prenj','Cvrsnica','Otomalj','Cincar','Vitorog',
                //'Troglav','Sator','Durmitor','Bjelasnica','Jahorina','Vlasic','Visocica','Treskavice',
                //'Zelengora','Klekovaca','Igman','Sator','Vran'];
    var mountains = ['Vlasic','Maglic','Prenj'];

    $('.typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
        },
    {
        name: 'mountains',
        source: substringMatcher(mountains)
    });

// $(document.body).on('click','.tt-suggestion',function  () {
//     alert($(this).text());
// })
// $('select.select-destination').on('click',function  () {
//     alert($(this).val());
// })
