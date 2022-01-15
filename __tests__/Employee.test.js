const Employee = require('../lib/Employee');

test("Should instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Should set name via constructor arguments", () => {
    const name = "Rick";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("Should set name via constructor arguments", () => {
    const id = "100";
    const e = new Employee('Rick', id);
    expect(e.id).toBe(id);
  });

  test("Should set name via constructor arguments", () => {
    const email = "rick.ansay@gmail.com";
    const e = new Employee('Rick', "204", email);
    expect(e.email).toBe(email);
  });
  
  test("Should get name via getName()", () => {
    const expectedName = "Rick";
    const e = new Employee(expectedName);
    expect(e.getName()).toBe(expectedName);
  });
  
  test("Should get name via getName()", () => {
    const expectedId = "100";
    const e = new Employee('Rick', expectedId);
    expect(e.getId()).toBe(expectedId);
  });

  test("Should get name via getName()", () => {
    const expectedEmail = "rick.ansay@gmail.com";
    const e = new Employee('Rick', '204', expectedEmail);
    expect(e.getEmail()).toBe(expectedEmail);
  });

  test("Should return Employee for getRole()", () => {
    const expectedRole = 'Employee';
    const e = new Employee('Rick', '204', 'rick.ansay@gmail.com');
    expect(e.getRole()).toBe(expectedRole);
  });