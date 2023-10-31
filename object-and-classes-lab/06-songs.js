function songs(arr) {

    let songsData = arr.shift();
    let typeList = arr.pop();

    for (let elem of arr) {
        let [type, name] = elem.split('_');

        class Song {
            constructor() {
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