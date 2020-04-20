const SETUSER = 'SETUSER';

export const setUser = data => (
	{
		type: SETUSER,
		data,
    }
);