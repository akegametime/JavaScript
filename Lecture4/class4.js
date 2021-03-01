class media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;

    }
}


class song extends media{
    constructor(songdata){
        super(songdata);
        this.artist = songdata.artist;
    }
}

const mysong = new song ( {
    artist:"queen",
    name : "bohemian ",
    publishDate : 1975,
});

console.log(mysong);