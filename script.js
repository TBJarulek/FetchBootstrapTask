function meghiv() {

    const valasztott = document.getElementById("valuta").value;

    const url = `https://hexarate.paikama.co/api/rates/HUF/${valasztott}/latest`;

    fetch(url)
        .then(response => {

            if(!response.ok){

                throw new Error

        }   
            return response.json()

        })
        .then(json => {

            let p = document.getElementById("eredmeny");
            let megadottErtek = document.getElementById("megadottErtek").value;
            let atvaltasSzorzo = json.data.mid;

            p.innerHTML = `${megadottErtek} HUF = ${megadottErtek * atvaltasSzorzo} ${valasztott}`

        })

}