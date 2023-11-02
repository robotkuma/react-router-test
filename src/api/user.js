export const User = {
  getUser: async () => {
    const response = await fetch('https://randomuser.me/api/', {
      method: 'GET',
    });
    const results = await response.json();
    
    return results;
  }
}