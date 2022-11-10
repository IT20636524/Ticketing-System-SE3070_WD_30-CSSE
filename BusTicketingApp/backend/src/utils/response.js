// const makeResponse = ({ status = 200 , data, message}) => res.status(status).json({ data, message })

export const makeResponse = ({ res, status = 200, data, message }) => {
    const responseData = { data, message };
    //if data is undefined remove data property from responseData object
    if (!data) delete responseData.data;
    res.status(status).json(responseData);
  };
  