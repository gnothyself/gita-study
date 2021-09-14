import { useEffect, useState } from "react";

function DisplayVerse() {
    const [verses, setVerses] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/verses`)
            .then((response) => response.json())
            .then(setVerses)
            .catch((error) => {
                console.log(error)
            })
    }, []);

    const verseList = verses.map((verse) => {
        return (
            <Verse
                id={verse.chapterId}
                verse={verse.verse}
                text={verse.text}
                translation={verse.translation}
            />
        );
    })

    function Verse({ id, verse, text, translation }) {
        return (
            <div className="container">
                <div className="row-md-6">
                     {/* <div class="col-md-6"> */}
                        <div className="chapter-card" key={id}>
                            <div className="card-body">
                                <div className="row justify-content-between">
                                    <h5 className="card-title">Verse {verse}</h5>
                                    <p className="text"><em>{text}</em></p>
                                    <p className="text">{translation}</p>
                                </div>
                                {/* <ChapterButtons id={id} /> */}
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        );
    }

    return (
        verseList
    )


}

export default DisplayVerse;
