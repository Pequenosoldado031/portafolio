import '../../assets/scss/basis/_index.scss';
import './classes.scss';

import {Button} from "@mui/material";
import {useContext, useEffect} from "react";
import {LoadingContext} from "../../context/Loading/LoadingContext";

export const Classes = () => {

    const {setLoading, loadingState} = useContext(LoadingContext);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [loadingState.isLoading])

  return (
    <div className={'global-wrapper'}>
      {/*text 30*/}
      <span className={'text-b-30-gy'}>.text-b-30-gy</span>
      <span className={'text-b-30-blue'}>.text-b-30-blue</span>
      <span className={'text-b-30-white'}>.text-b-30-white</span>
      <span className={'text-r-30-gy'}>.text-r-30-gy</span>
      <span className={'text-r-30-blue'}>.text-r-30-blue</span>
      <span className={'text-r-30-white'}>.text-r-30-white</span>
      <span className={'text-m-30-gy'}>.text-m-30-gy</span>
      <span className={'text-m-30-blue'}>.text-m-30-blue</span>
      <span className={'text-m-30-white'}>.text-m-30-white</span>
      <span className={'text-l-30-gy'}>.text-l-30-gy</span>
      <span className={'text-l-30-blue'}>.text-l-30-blue</span>
      <span className={'text-l-30-white'}>.text-l-30-white</span>

      {/*text 28*/}
      <span className={'text-b-28-gy'}>.text-b-28-gy</span>
      <span className={'text-b-28-blue'}>.text-b-28-blue</span>
      <span className={'text-b-28-white'}>.text-b-28-white</span>
      <span className={'text-r-28-gy'}>.text-r-28-gy</span>
      <span className={'text-r-28-blue'}>.text-r-28-blue</span>
      <span className={'text-r-28-white'}>.text-r-28-white</span>
      <span className={'text-m-28-gy'}>.text-m-28-gy</span>
      <span className={'text-m-28-blue'}>.text-m-28-blue</span>
      <span className={'text-m-28-white'}>.text-m-28-white</span>
      <span className={'text-l-28-gy'}>.text-l-28-gy</span>
      <span className={'text-l-28-blue'}>.text-l-28-blue</span>
      <span className={'text-l-28-white'}>.text-l-28-white</span>
      {/*text 26*/}
      <span className={'text-b-26-gy'}>.text-b-26-gy</span>
      <span className={'text-b-26-blue'}>.text-b-26-blue</span>
      <span className={'text-b-26-white'}>.text-b-26-white</span>
      <span className={'text-r-26-gy'}>.text-r-26-gy</span>
      <span className={'text-r-26-blue'}>.text-r-26-blue</span>
      <span className={'text-r-26-white'}>.text-r-26-white</span>
      <span className={'text-m-26-gy'}>.text-m-26-gy</span>
      <span className={'text-m-26-blue'}>.text-m-26-blue</span>
      <span className={'text-m-26-white'}>.text-m-26-white</span>
      <span className={'text-l-26-gy'}>.text-l-26-gy</span>
      <span className={'text-l-26-blue'}>.text-l-26-blue</span>
      <span className={'text-l-26-white'}>.text-l-26-white</span>

      {/*text 24*/}
      <span className={'text-b-24-gy'}>.text-b-24-gy</span>
      <span className={'text-b-24-blue'}>.text-b-24-blue</span>
      <span className={'text-b-24-white'}>.text-b-24-white</span>
      <span className={'text-r-24-gy'}>.text-r-24-gy</span>
      <span className={'text-r-24-blue'}>.text-r-24-blue</span>
      <span className={'text-r-24-white'}>.text-r-24-white</span>
      <span className={'text-m-24-gy'}>.text-m-24-gy</span>
      <span className={'text-m-24-blue'}>.text-m-24-blue</span>
      <span className={'text-m-24-white'}>.text-m-24-white</span>
      <span className={'text-l-24-gy'}>.text-l-24-gy</span>
      <span className={'text-l-24-blue'}>.text-l-24-blue</span>
      <span className={'text-l-24-white'}>.text-l-24-white</span>

      {/*text 22*/}
      <span className={'text-b-22-gy'}>.text-b-22-gy</span>
      <span className={'text-b-22-blue'}>.text-b-22-blue</span>
      <span className={'text-b-22-white'}>.text-b-22-white</span>
      <span className={'text-r-22-gy'}>.text-r-22-gy</span>
      <span className={'text-r-22-blue'}>.text-r-22-blue</span>
      <span className={'text-r-22-white'}>.text-r-22-white</span>
      <span className={'text-m-22-gy'}>.text-m-22-gy</span>
      <span className={'text-m-22-blue'}>.text-m-22-blue</span>
      <span className={'text-m-22-white'}>.text-m-22-white</span>
      <span className={'text-l-22-gy'}>.text-l-22-gy</span>
      <span className={'text-l-22-blue'}>.text-l-22-blue</span>
      <span className={'text-l-22-white'}>.text-l-22-white</span>

      {/*text 20*/}
      <span className={'text-b-20-gy'}>.text-b-20-gy</span>
      <span className={'text-b-20-blue'}>.text-b-20-blue</span>
      <span className={'text-b-20-white'}>.text-b-20-white</span>
      <span className={'text-r-20-gy'}>.text-r-20-gy</span>
      <span className={'text-r-20-blue'}>.text-r-20-blue</span>
      <span className={'text-r-20-white'}>.text-r-20-white</span>
      <span className={'text-m-20-gy'}>.text-m-20-gy</span>
      <span className={'text-m-20-blue'}>.text-m-20-blue</span>
      <span className={'text-m-20-white'}>.text-m-20-white</span>
      <span className={'text-l-20-gy'}>.text-l-20-gy</span>
      <span className={'text-l-20-blue'}>.text-l-20-blue</span>
      <span className={'text-l-20-white'}>.text-l-20-white</span>

      {/*text 18*/}
      <span className={'text-b-18-gy'}>.text-b-18-gy</span>
      <span className={'text-b-18-blue'}>.text-b-18-blue</span>
      <span className={'text-b-18-white'}>.text-b-18-white</span>
      <span className={'text-r-18-gy'}>.text-r-18-gy</span>
      <span className={'text-r-18-blue'}>.text-r-18-blue</span>
      <span className={'text-r-18-white'}>.text-r-18-white</span>
      <span className={'text-m-18-gy'}>.text-m-18-gy</span>
      <span className={'text-m-18-blue'}>.text-m-18-blue</span>
      <span className={'text-m-18-white'}>.text-m-18-white</span>
      <span className={'text-l-18-gy'}>.text-l-18-gy</span>
      <span className={'text-l-18-blue'}>.text-l-18-blue</span>
      <span className={'text-l-18-white'}>.text-l-18-white</span>

      {/*text 16*/}
      <span className={'text-b-16-gy'}>.text-b-16-gy</span>
      <span className={'text-b-16-blue'}>.text-b-16-blue</span>
      <span className={'text-b-16-white'}>.text-b-16-white</span>
      <span className={'text-r-16-gy'}>.text-r-16-gy</span>
      <span className={'text-r-16-blue'}>.text-r-16-blue</span>
      <span className={'text-r-16-white'}>.text-r-16-white</span>
      <span className={'text-m-16-gy'}>.text-m-16-gy</span>
      <span className={'text-m-16-blue'}>.text-m-16-blue</span>
      <span className={'text-m-16-white'}>.text-m-16-white</span>
      <span className={'text-l-16-gy'}>.text-l-16-gy</span>
      <span className={'text-l-16-blue'}>.text-l-16-blue</span>
      <span className={'text-l-16-white'}>.text-l-16-white</span>

      {/*text 14*/}
      <span className={'text-b-14-gy'}>.text-b-14-gy</span>
      <span className={'text-b-14-blue'}>.text-b-14-blue</span>
      <span className={'text-b-14-white'}>.text-b-14-white</span>
      <span className={'text-r-14-gy'}>.text-r-14-gy</span>
      <span className={'text-r-14-blue'}>.text-r-14-blue</span>
      <span className={'text-r-14-white'}>.text-r-14-white</span>
      <span className={'text-m-14-gy'}>.text-m-14-gy</span>
      <span className={'text-m-14-blue'}>.text-m-14-blue</span>
      <span className={'text-m-14-white'}>.text-m-14-white</span>
      <span className={'text-l-14-gy'}>.text-l-14-gy</span>
      <span className={'text-l-14-blue'}>.text-l-14-blue</span>
      <span className={'text-l-14-white'}>.text-l-14-white</span>

      {/*text 12*/}
      <span className={'text-b-12-gy'}>.text-b-12-gy</span>
      <span className={'text-b-12-blue'}>.text-b-12-blue</span>
      <span className={'text-b-12-white'}>.text-b-12-white</span>
      <span className={'text-r-12-gy'}>.text-r-12-gy</span>
      <span className={'text-r-12-blue'}>.text-r-12-blue</span>
      <span className={'text-r-12-white'}>.text-r-12-white</span>
      <span className={'text-m-12-gy'}>.text-m-12-gy</span>
      <span className={'text-m-12-blue'}>.text-m-12-blue</span>
      <span className={'text-m-12-white'}>.text-m-12-white</span>
      <span className={'text-l-12-gy'}>.text-l-12-gy</span>
      <span className={'text-l-12-blue'}>.text-l-12-blue</span>
      <span className={'text-l-12-white'}>.text-l-12-white</span>
      <span className={'text-error'}>.text-error</span>

      <div className={'three-buttons-field'}>
          <Button disabled={true} variant={'outlined'}>Inactive</Button>
          <Button variant={'outlined'} onClick={() => setLoading(true)}>Primary</Button>
          <Button variant={'outlined'} color={'error'}>SECONDARY</Button>
      </div>


    </div>
  );

}
