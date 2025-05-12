const setup = () => {
    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address : {
            zipCode : 8500,
            city : "Kortrijk"
        }
    };
    console.log (student2.address.zipCode);

    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk"
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {zipCode: 8500,
                city: "Kortrijk"
            }
        }
    ];
    tekst = JSON.stringify(students);
    console.log(tekst);

    tekstJS = JSON.parse(tekst);
    console.log("JsonParse " + tekstJS[0].firstName);

    tekst = JSON.stringify(students[1]);
    console.log(tekst);
}
window.addEventListener("load", setup);