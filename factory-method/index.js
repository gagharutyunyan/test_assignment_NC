class User {
  constructor(user) {
    this.name = user.name;
    this.frontend = user.frontend || false;
    this.backend = user.backend || false;
    this.react = user.react || false;
  }
}

class DeveloperMaker {
  constructor(name) {
    this.name = name;
  }

  addFrontend() {
    this.frontend = true;
    return this;
  }

  addBackend() {
    this.backend = true;
    return this;
  }

  addReact() {
    this.react = true;
    return this;
  }

  build() {
    return new User(this);
  }
}

const user = new DeveloperMaker("Gagik")
  .addFrontend()
  .addReact()
  .build();

console.log(user);
