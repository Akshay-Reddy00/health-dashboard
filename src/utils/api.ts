export const fetchPatientData = async (username: string, password: string) => {
    // Create base64 encoded credentials
    const username: 'coalition';
    const credentials = btoa(`${username}:${password}`);
    
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch patient data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching patient data:', error);
      throw error;
    }
  };