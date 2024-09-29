import axios from "axios";

class GitHubApiService {
  async getUser(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  }
  ["fetchUserData"];
  ["https://api.github.com/search/users?q", "location", "minRepos"]
  ["location", "html_url"]

  async getRepositories(username) {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data;
  }
}

export default GitHubApiService;
