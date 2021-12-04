const getParams = () => {
    const params = new URLSearchParams(window.location.search);
      let titleParams = params.get('title');
      let descriptionParams = params.get('description');
      let progressParams = params.get('progress');
      let userParams = params.get('user');
      let creationDateParams = params.get('creationDate');
      let startDateParams = params.get('startDate');
      let completionDateParams = params.get('completionDate');
      let idParams = params.get('id')
    
return {titleParams, descriptionParams, progressParams, userParams, creationDateParams, startDateParams, completionDateParams, idParams }
}

export { getParams }