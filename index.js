import express from 'express'
import cors from 'cors'
import router from './routes/auth.js'
import departmentrouter from './routes/department.js'
import connectToDatabase from './db/db.js'
import employeeRouter from './routes/employee.js'
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js'
import settingRouter from './routes/setting.js'
import dashboardRouter from './routes/dashboard.js'


connectToDatabase()


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))


app.use('/api/auth', router)
app.use('/api/department', departmentrouter)
app.use('/api/employee', employeeRouter)
app.use('/api/salary',salaryRouter)
app.use('/api/leave',leaveRouter)
app.use('/api/setting',settingRouter)
app.use('/api/dashboard',dashboardRouter)










app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

