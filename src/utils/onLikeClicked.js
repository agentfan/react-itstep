const onLikeCliked = (periodId, workId, painter, setPainter) => {
    let newPainter = {
        name: painter.name,
        img: painter.img,
        notes: painter.notes.map(n => { return { id: n.id, text: n.text } }),
        periods: painter.periods.map(p => {
            return ({
                id: p.id,
                title: p.title,
                notes: p.notes.map(n => {
                    return ({
                        id: n.id,
                        text: n.text
                    });
                }),
                works: p.works.map(w => {
                    return ({
                        id: w.id,
                        title: w.title,
                        year: w.year,
                        img: w.img,
                        likes: w.likes,
                        notes: w.notes.map(n => {
                            return({
                                id: n.id,
                                text: n.text
                            });
                        })
                    });
                })
            });
        })
    };

    let period = newPainter.periods.find(p => p.id === periodId);
    if (!period) return;
    console.log("Period:",period);
    let work = period.works.find(w => w.id === workId);
    if (!work) return;
    console.log("Work:",work);
    work.likes++;
    console.log("Painter", painter);
    console.log("New painter", newPainter);
    setPainter(newPainter);
}

export default onLikeCliked;