


function normalizeSearchCriteria(data: any) {
    let result: any[] = []
    for (let key of Object.keys(data)) {
      if (data[key] == null || data[key] == "") {
        continue
      }
      else {
        if (["mobile", "id"].includes(key)) {
          result.push({ "key": key, "type": "3", "value": Number(data[key]) })
          continue
        }
        if (["FromDate", "ToDate"].includes(key)) {
        }
        if (["status"].includes(key)) {
          result.push({ "key": key, "type": "2", "value": data[key] })
          continue
        }
        result.push({ "key": key, "type": "1", "value": data[key] })
      }
    }
    return result
  }

export { normalizeSearchCriteria }