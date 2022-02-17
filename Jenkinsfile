pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'yarn run cy:run'
            }
        }
    }
}