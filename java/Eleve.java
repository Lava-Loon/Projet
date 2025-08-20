public class Eleve {
    String nom;
    int age;

    public Eleve(String nom, int age) {
        this.nom = nom;
        this.age = age;
    }

    public void afficher() {
        System.out.println(nom + " a " + age + " ans.");
    }
}