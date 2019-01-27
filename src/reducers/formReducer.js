export default function formReducer(state = [], action){
  switch(action.type){
    case 'CREATE_FIRST_NAME':
      return [...state,
      Object.assign({}, action.first_name)
      ]

    default:
        return state
    }
  }
