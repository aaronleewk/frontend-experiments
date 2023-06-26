import Select from 'react-select';
import AsyncSelect from 'react-select/async';

export default function GenericSelect({ type, loadOptions, placeHolder, passField}) {

    if(type){
        return (
            <AsyncSelect  
                cacheOptions
                loadOptions={loadOptions} 
                getOptionLabel={(e) => e.stockName}
                getOptionValue={(e) => e.id}
                defaultOptions
                placeholder={placeHolder}
                onChange={(e) => passField.onChange(e.stockName)}
                ref={passField.ref}
                name={passField.name}
                onBlue={passField.onBlur}
            />
          )
    } else {
        return(

            <Select
                placeholder="Select Stock"
                options={stocks}
                isClearable
                value={langValue ? languageList.find(x => x.value === langValue) : langValue}
                onChange={option => langOnChange(option ? option.value : option)}
                noOptionsMessage={()=>"Stock not found"}
                {...restLangField}
            />

        )
    }
  };
