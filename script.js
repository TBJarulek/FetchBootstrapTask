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

            let label = document.getElementById("eredmeny");
            let megadottErtek = document.getElementById("megadottErtek").value || 0;
            let atvaltasSzorzo = json.data.mid;

            label.classList.add("mt-2");
            label.classList.add("mb-2");

            let final = document.getElementById("finalBox");
            final.classList.add("border");
            final.classList.add("border-success-subtle");

            
            label.innerHTML = `${megadottErtek} HUF = ${megadottErtek * atvaltasSzorzo} ${valasztott}`

        })

}