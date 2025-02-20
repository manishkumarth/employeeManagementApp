import { useEffect } from "react"

export const admin = [
    {
        "id": "admin01",
        "name": "Manish Kumar",
        "email": "admin@example.com",
        "password": "Admin@123"
    }
]
export const employees = [
    {
        "id": "emp01",
        "name": "Ravi Kumar", // Added name
        "email": "emp01@example.com",
        "password": "Emp@123",
        "tasks": [
            {
                "taskId": "task101",
                "title": "Frontend Bug Fix",
                "description": "Fix alignment issues on the homepage.",
                "assignedDate": "2025-02-02",
                "deadline": "2025-02-05",
                "status": "Pending"
            },
            {
                "taskId": "task102",
                "title": "Component Refactoring",
                "description": "Refactor the navbar component for better readability.",
                "assignedDate": "2025-02-03",
                "deadline": "2025-02-06",
                "status": "In Progress"
            }
        ]
    },
    {
        "id": "emp02",
        "name": "Priya Sharma", // Added name
        "email": "emp02@example.com",
        "password": "Emp@123",
        "tasks": [
            {
                "taskId": "task103",
                "title": "Backend API Update",
                "description": "Update authentication API to support OAuth.",
                "assignedDate": "2025-02-03",
                "deadline": "2025-02-07",
                "status": "In Progress"
            },
            {
                "taskId": "task104",
                "title": "JWT Token Expiry Fix",
                "description": "Fix token expiration issue in the login flow.",
                "assignedDate": "2025-02-02",
                "deadline": "2025-02-06",
                "status": "Pending"
            },
            {
                "taskId": "task105",
                "title": "Database Schema Update",
                "description": "Add a new column for user activity logs.",
                "assignedDate": "2025-02-04",
                "deadline": "2025-02-08",
                "status": "Pending"
            }
        ]
    },
    {
        "id": "emp03",
        "name": "Arun Singh", // Added name
        "email": "emp03@example.com",
        "password": "Emp@123",
        "tasks": [
            {
                "taskId": "task106",
                "title": "Database Optimization",
                "description": "Optimize query performance for user data retrieval.",
                "assignedDate": "2025-02-01",
                "deadline": "2025-02-06",
                "status": "Completed"
            },
            {
                "taskId": "task107",
                "title": "Create Backup Strategy",
                "description": "Implement automated backups for the database.",
                "assignedDate": "2025-02-03",
                "deadline": "2025-02-09",
                "status": "In Progress"
            }
        ]
    },
    {
        "id": "emp04",
        "name": "Meera Joshi", // Added name
        "email": "emp04@example.com",
        "password": "Emp@123",
        "tasks": [
            {
                "taskId": "task108",
                "title": "UI Enhancement",
                "description": "Improve button styles and animations.",
                "assignedDate": "2025-02-04",
                "deadline": "2025-02-08",
                "status": "Pending"
            },
            {
                "taskId": "task109",
                "title": "Dark Mode Implementation",
                "description": "Add a dark mode toggle feature.",
                "assignedDate": "2025-02-05",
                "deadline": "2025-02-10",
                "status": "Pending"
            }
        ]
    },
    {
        "id": "emp05",
        "name": "Neha Reddy", // Added name
        "email": "emp05@example.com",
        "password": "Emp@123",
        "tasks": [
            {
                "taskId": "task110",
                "title": "Testing and Debugging",
                "description": "Perform unit testing and resolve reported bugs.",
                "assignedDate": "2025-02-02",
                "deadline": "2025-02-09",
                "status": "In Progress"
            },
            {
                "taskId": "task111",
                "title": "Performance Benchmarking",
                "description": "Analyze app performance and suggest improvements.",
                "assignedDate": "2025-02-04",
                "deadline": "2025-02-11",
                "status": "Pending"
            },
            {
                "taskId": "task112",
                "title": "Error Logging Setup",
                "description": "Integrate an error logging service to track issues.",
                "assignedDate": "2025-02-03",
                "deadline": "2025-02-08",
                "status": "Pending"
            }
        ]
    }
];

export const setlocalStorge = (employees, admin) => {
    if (employees) {
        localStorage.setItem("employees", JSON.stringify(employees))
    }
    if (admin) {
        localStorage.setItem("admin", JSON.stringify(admin))
    }
}
