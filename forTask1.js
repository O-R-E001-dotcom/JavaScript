function runProfile() {
    let firstName = "Abolore";
    let lastName = "Sanni";
    let age = 10;
    let schoolName = "AI School";
    let grade = "A+"
    let isGraduated = true;

    let fullName = `${firstName} ${lastName}`;
    
    const nextYearAge = age + 1;

    console.log(`Fullname: ${fullName}`);
    console.log(`Age: ${age}`);
    console.log(`schoolName: ${schoolName}`);
    console.log(`Graduated: ${isGraduated}`);
    console.log(`Next Year Age: ${nextYearAge}`);
    console.log(`Number of characters in fullname: ${fullName.length}`)
    console.log(`Uppercase: ${fullName.toUpperCase()}`);
    console.log(`Lowercase: ${schoolName.toLowerCase()}`);
    console.log(`Trimmed: ${grade.trim()}`)
}
