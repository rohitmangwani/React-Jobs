import{Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from"react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage,{jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
function App() {
  // add job
  const addJob =async(newjob)=>{
    const res = await fetch(`/api/jobs`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newjob)
    })
    return;
  }
  //delete job
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    });
    return;
  }
    //update 
  const updateJob= async(job)=>{
    const res = await fetch(`/api/jobs/${job?.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job)
    })
    return;
  }

const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}> 
    <Route index element={<HomePage/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>
    <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path="edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
    <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Route>
  )
)
 return (<RouterProvider router={routes}/>)
}

export default App;
