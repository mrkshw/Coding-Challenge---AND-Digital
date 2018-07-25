/**
 * 1-Dimensional Array of Objects. Each object has a Name, and and array of skills.
 *
 */
const newCandidates = [
    { name: "Kerrie", skills: ["JavaScript", "Docker", "Ruby"] },
    { name: "Mario", skills: ["Python", "AWS"] },
    { name: "Jacquline", skills: ["JavaScript", "Azure"] },
    { name: "Kathy", skills: ["JavaScript", "Java"] },
    { name: "Anna", skills: ["JavaScript", "AWS"] },
    { name: "Matt", skills: ["PHP", "AWS"] },
    { name: "Matt", skills: ["PHP", ".Net", "Docker"] },
];

/**
 * removeRowsFromTable - method to remove rows from a table
 *
 * @param table - the table to remove rows from
 */
function removeRowsFromTable(table) {
    const rows = table.getElementsByTagName("tr");

    while (rows.length > 1) {
        table.deleteRow(1);
    }
}

/**
 * Function to insert a candidate
 *
 * @param tbody - the body of the table to insert the candidate into
 * @param name - the candidate's name
 * @param skills - the candidate's skills
 */
function insertCandidate(tbody, name, skills) {
    const newRow = tbody.insertRow();
    const nameCell = newRow.insertCell();
    const skillCell = newRow.insertCell();

    const candidateName = document.createTextNode(name);
    const candidateSkills = document.createTextNode(skills.join(', '));

    nameCell.appendChild(candidateName);
    skillCell.appendChild(candidateSkills);
}

/**
 * Function to add candidates to a table. Uses a forEach loop to add candidates to a table.
 *
 * @param table - the table to add candidates to.
 * @param candidates - the array of candidates to add.
 */
function addCandidatesToTable(table, candidates) {
    candidates.forEach(candidate => insertCandidate(table, candidate.name, candidate.skills));
}

/**
 * Function to create an array of filtered candidate objects, based on an inputted variable.
 *
 * Uses the @filter method to filter all through all of the candidates, checking to see whether
 * the candidate's skills contains the requested skill.
 *
 * @param candidates - the original array of candidates to search through
 * @param skill - the skill to match
 *
 * @returns an array of filtered candidates, which includes all candidates that have the desired skill.
 */
function filterCandidateBySkill(candidates, skill) {
    const filteredSkill = skill;
    let filteredCandidates = candidates.filter(c =>

        c.skills.includes(filteredSkill));
    return filteredCandidates;
}

/**
 * Function to create a filtered table, based on the hardcoded example.
 *
 * @param filter - the String representation of the required skill.
 */
function createFilteredTable() {

    // Finds the hard-coded table, and clones it using cloneNode.
    const candidatesTable = document.getElementById("candidates_example");
    const newCandidatesTable = candidatesTable.cloneNode(true);


    removeRowsFromTable(newCandidatesTable);
    const newTbody = newCandidatesTable.getElementsByTagName('tbody')[0];

    <!-- Added missing semicolons -->
    const filteredCandidates = filterCandidateBySkill(newCandidates, "JavaScript");
    addCandidatesToTable(newTbody, filteredCandidates);

    document.body.appendChild(newCandidatesTable);
}
