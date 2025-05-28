import java.sql.*;

class StudentDAO {
    private final String url = "jdbc:sqlite:students.db";

    public void insertStudent(int id, String name) throws SQLException {
        try (Connection conn = DriverManager.getConnection(url);
             PreparedStatement ps = conn.prepareStatement("INSERT INTO students(id, name) VALUES(?, ?)")) {
            ps.setInt(1, id);
            ps.setString(2, name);
            ps.executeUpdate();
        }
    }

    public void updateStudent(int id, String newName) throws SQLException {
        try (Connection conn = DriverManager.getConnection(url);
             PreparedStatement ps = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?")) {
            ps.setString(1, newName);
            ps.setInt(2, id);
            ps.executeUpdate();
        }
    }
}
