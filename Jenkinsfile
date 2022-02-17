pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
                sh 'yarn run cy:run'
            }
        }
        post {
             always {
                 junit 'build/test-results/test/*.xml'
             }
        }
    }
}