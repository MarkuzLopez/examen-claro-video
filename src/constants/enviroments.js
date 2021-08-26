/* eslint-disable no-lone-blocks */
const name = process.env.NODE_ENV || 'local';

let environments;

switch (name) {
    case 'uat':
        environments = {
            
            apiUrl: 'https://api.themoviedb.org/3/'
        }
        break;
    case 'production':
        environments = {
            apiUrl: 'https://api.themoviedb.org/3/'
        }
        break;
    
        default: {
           environments = {
                apiUrl: 'https://api.themoviedb.org/3/'
            }
        };

        break;
}

export default environments;
