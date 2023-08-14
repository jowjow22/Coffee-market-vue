export function setKey(name: string, value: any) {
  localStorage.setItem(name, JSON.stringify(value));
}
export function getKey(name: string) {
  const value = localStorage.getItem(name);
  if (value) {
    return JSON.parse(value);
  }
  return null;
}
