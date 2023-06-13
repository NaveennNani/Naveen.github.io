const arrayOps = (item1, item2) => {
    const languages = ['Java', 'JavaScript', 'Python', 'Rust'];
    console.log(languages);
    languages.unshift(item1);
    languages.push(item2);
    console.log(languages);
}

arrayOps('Cobol', 'Swift');