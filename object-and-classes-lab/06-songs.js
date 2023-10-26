function songs(arr) {

    let songsData = arr.shift();
    let typeList = arr.pop();
    // console.log(arr);

    for (let elem of arr) {
        let tokens = elem.split('_');
        let type = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        class Song {
            constructor(songType, songName) {
                this.songType = type;
                this.songName = name;

            }

            output() {
                if (typeList == 'all') {
                    console.log(this.songName);
                } else if (typeList == this.songType) {
                    console.log(this.songName);
                }
            }
        }

        let songInfo = new Song(typeList);

        songInfo.output();
    }

}

songs([2,
    'like_Replay_3',
    'ban_Photoshop_3',
    'all'])