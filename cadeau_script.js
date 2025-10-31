// Kan'tsnnaw l'page kamla t'charger
window.addEventListener('load', () => {
    const music = document.getElementById('background-music');
    
    // Kan7awlo nkhdmo l'music
    if (music) {
        // L'navigateur kay3ql 3la l'click li drti f l'page l'wla
        // o kaykhllik tkhdem l'sawt hna
        music.play().catch(error => {
            // Ila ma khdemch b'sbab chi 7aja khra...
            console.log("L'navigateur ma bghach ykhdem l'sawt automatiquement.");
            
            // Kan'zido 7el احتياطي: ila l'user clika f ay blassa, l'music tkhdem
            document.body.addEventListener('click', () => {
                music.play();
            }, { once: true }); // Katkhdem ghir merra wahda
        });
    }
});
