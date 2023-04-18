function submit(){
    let input = document.getElementById("input").value;
    let li = document.createElement("li");
    li.textContent = input;
    document.getElementById("output").appendChild(li);

    // output.append(input);
}