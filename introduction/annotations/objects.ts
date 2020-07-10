const profile = {
  username: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// type annotations for object destructuring
const { age, username }: { age: number; username: string } = profile;
const { coords: { lat, lng } }: { coords: { lat: number; lng: number} } = profile;

// Type inferrence works fine in this cases:
// const { age, namee } = profile; 
// const { coords: { lat, lng } } = profile;

