import mockAxios from '../../__mock__/axios.mock'
 
describe('Axios request', () => {
  it('fetches successfully data from an API', async () => {
    const data = {
      data: {
        cases: [
          {
            title: 'Case 1',
            number: '13867-13.96',
          },
          {
            objectID: 'Case 2',
            title: '138967.1-086',
          },
        ],
      },
    };
 
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
 
  it('fetches erroneously data from an mockAxios', async () => {
    const errorMessage = 'Network Error';
 
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});