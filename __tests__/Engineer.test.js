const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test("Should instantiate Engineer instance", () => {
    const e = new Engineer('Rick', '204', 'rick@gmail.com', 'rickyricer');
    expect(typeof(e)).toBe("object");
  });

  test("Should set github via constructor arguments", () => {
    const github = 'rickyricer';
    const e = new Engineer('Rick', '204', 'rick.ansay@gmail.com', 'rickyricer');
    expect(e.github).toBe(github);
  });

  test("Should get github via getGithub())", () => {
    const expectedGithub = 'rickyricer';
    const e = new Engineer('Rick', '204', 'rick.ansay@gmail.com', expectedGithub);
    expect(e.github).toBe(expectedGithub);
  });
  

  test("Should return Engineer for getRole()", () => {
    const expectedRole = 'Engineer';
    const e = new Engineer('Rick', '204', 'rick.ansay@gmail.com', 'rickyricer');
    expect(e.getRole()).toBe(expectedRole);
  });